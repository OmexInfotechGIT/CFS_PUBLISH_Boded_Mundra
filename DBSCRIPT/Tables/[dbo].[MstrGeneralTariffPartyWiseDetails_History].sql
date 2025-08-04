USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[MstrGeneralTariffPartyWiseDetails_History]    Script Date: 5/23/2024 10:47:25 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MstrGeneralTariffPartyWiseDetails_History](
	[MstrGeneralTariffPartyWiseDetails_HistoryID] [int] IDENTITY(1,1) NOT NULL,
	[MstrGeneralTariffPartyWiseDetailsid] [int] NOT NULL,
	[MstrGeneralTariffPartyWiseEffetiveDateID] [int] NULL,
	[MstrCustomerID] [int] NULL,
	[MstrCustomerName] [varchar](255) NULL,
	[Caption] [varchar](25) NULL
) ON [PRIMARY]
GO


