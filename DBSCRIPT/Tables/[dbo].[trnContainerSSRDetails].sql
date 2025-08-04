USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnContainerSSRDetails]    Script Date: 01/08/2024 5:23:01 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnContainerSSRDetails](
	[trnContainerSSRDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[ContainerSSRID] [bigint] NULL,
	[ContNo] [varchar](255) NULL,
	[ContNoID] [bigint] NULL,
	[Size] [varchar](50) NULL,
	[Type] [varchar](50) NULL,
	[CargoType] [varchar](255) NULL,
	[SSRBiilableHead] [varchar](255) NULL,
	[SSRBiilableHeadID] [bigint] NULL,
	[Quantity] [varchar](255) NULL,
	[Rate] [varchar](255) NULL,
	[AdditionalRate] [varchar](255) NULL,
	[TotalAmount] [varchar](255) NULL,
	[Status] [varchar](255) NULL,
	[Remark] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Discount] [decimal](10, 2) NOT NULL,
	[GSTPer] [decimal](10, 2) NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnContainerSSRDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnContainerSSRDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnContainerSSRDetails] ADD  DEFAULT ((0)) FOR [Discount]
GO

ALTER TABLE [dbo].[trnContainerSSRDetails] ADD  DEFAULT ((0)) FOR [GSTPer]
GO


