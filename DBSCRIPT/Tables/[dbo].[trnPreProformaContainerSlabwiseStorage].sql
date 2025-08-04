USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnPreProformaContainerSlabwiseStorage]    Script Date: 04/09/2024 4:20:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnPreProformaContainerSlabwiseStorage](
	[trnPreProformaContainerSlabwiseStorageID] [int] IDENTITY(1,1) NOT NULL,
	[trnPreProformaID] [int] NULL,
	[ContSizeName] [varchar](255) NULL,
	[ContSizeID] [int] NULL,
	[NoofContainers] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[Subcommodity] [varchar](255) NULL,
	[SubcommodityID] [int] NULL,
	[StorageStartDate] [varchar](255) NULL,
	[StorageEndDate] [varchar](255) NULL,
	[TarrifHead] [varchar](255) NULL,
	[TarrifHeadID] [int] NULL,
	[Total] [decimal](10, 2) NOT NULL,
	[Discountamt] [decimal](10, 2) NOT NULL,
	[Netamount] [decimal](10, 2) NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[GSTPer] [decimal](10, 2) NOT NULL,
	[IsFinished] [bit] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnPreProformaContainerSlabwiseStorage] ADD  CONSTRAINT [DF_trnPreProformaContainerSlabwiseStorage_Total]  DEFAULT ((0)) FOR [Total]
GO

ALTER TABLE [dbo].[trnPreProformaContainerSlabwiseStorage] ADD  CONSTRAINT [DF_trnPreProformaContainerSlabwiseStorage_Discountamt]  DEFAULT ((0)) FOR [Discountamt]
GO

ALTER TABLE [dbo].[trnPreProformaContainerSlabwiseStorage] ADD  CONSTRAINT [DF_trnPreProformaContainerSlabwiseStorage_Netamount]  DEFAULT ((0)) FOR [Netamount]
GO

ALTER TABLE [dbo].[trnPreProformaContainerSlabwiseStorage] ADD  CONSTRAINT [DF_trnPreProformaContainerSlabwiseStorage_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnPreProformaContainerSlabwiseStorage] ADD  CONSTRAINT [DF_trnPreProformaContainerSlabwiseStorage_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnPreProformaContainerSlabwiseStorage] ADD  DEFAULT ((0)) FOR [GSTPer]
GO

ALTER TABLE [dbo].[trnPreProformaContainerSlabwiseStorage] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


