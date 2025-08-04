USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[MstrGeneralTariffPartyWiseDetails]    Script Date: 01/31/2024 3:19:09 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MstrGeneralTariffPartyWiseDetails](
	[MstrGeneralTariffPartyWiseDetailsid] [int] IDENTITY(1,1) NOT NULL,
	[MstrGeneralTariffPartyWiseEffetiveDateID] [int] NULL,
	[MstrCustomerID] [int] NULL,
	[MstrCustomerName] [varchar](255) NULL
) ON [PRIMARY]
GO


